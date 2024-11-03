import { isSupported } from "virtual:vite-plugin-supported-browserslist"

/**
 * Checks if the current user agent is compatible with the supplied browserslist
 * 
 * @returns true if the current browser is supported, false otherwise
 */
export const isSupportedBrowser = () => {
    return isSupported.test(navigator.userAgent);
}