import { setAppError } from "@/app/appSlice";
import { ResultCode } from "../enums/ResultCode";
import type { BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue } from "@reduxjs/toolkit/query";
import { isErrorWithMessage } from "./isErrorWithMessage";

export const handleError = (
    api: BaseQueryApi,
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
) => {
    let error = null

    if (result.error) {

        const tmdbData = result.error.data as { status_message?: string } | undefined;
        
        if (tmdbData && typeof tmdbData.status_message === 'string') {
            error = tmdbData.status_message;
        } else {
        
        
            switch (result.error.status) {
                case "FETCH_ERROR":
                case "PARSING_ERROR":
                case "CUSTOM_ERROR":
                    error = result.error.error
                    break
                case 403:
                    error = "403 Forbidden Error. Check API-KEY"
                    break
                case 401:
                    error = "401 Unauthorized. Check your API Key or Token."
                    break
                case 400:
                    if (isErrorWithMessage(result.error.data)) {
                        error = result.error.data.message
                    } else {
                        error = JSON.stringify(result.error.data)
                    }
                    break
                default: {
                    const status = result.error.status;
                    if (typeof status === 'number' && status >= 500 && status < 600) {
                        error = "Server error occurred. Please try again later.";
                    } else {
                        error = typeof result.error.data === 'string'
                            ? result.error.data
                            : JSON.stringify(result.error);
                    }
                    break;
                }
            }
        }
        
        api.dispatch(setAppError({ error }))
        return; 
    }

    if ((result.data as { status: ResultCode })?.status !== ResultCode.SUCCESS) {
        const message = (result.data as { status_message: string })?.status_message
        error = message ? message : error
        api.dispatch(setAppError({ error }))
    }
}