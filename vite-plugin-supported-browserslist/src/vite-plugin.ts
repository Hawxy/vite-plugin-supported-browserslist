import type { Plugin } from "vite"
import { getUserAgentRegex, type UserAgentRegexOptions } from "browserslist-useragent-regexp"

export default function supportedBrowser(options?: UserAgentRegexOptions): Plugin {
    const virtualModuleId = 'virtual:vite-plugin-supported-browserslist'
    const resolvedVirtualModuleId = '\0' + virtualModuleId

    return {
        name: 'virtual:vite-plugin-supported-browserslist',
        resolveId(id) {
            if (id === virtualModuleId) {
                return resolvedVirtualModuleId
            }
        },
        load(id) {
            if (id === resolvedVirtualModuleId) {
                const regexp = getUserAgentRegex(options)

                return `
                const regex = String.raw\`${regexp}\`;
                
                export const isSupported = new RegExp(regex);`
            }
        },
        config(__, _) {
            return {
                optimizeDeps: {
                    exclude: ['vite-plugin-supported-browserslist']
                },
                ssr: {
                    optimizeDeps: {
                        exclude: ['vite-plugin-supported-browserslist']
                    },
                    noExternal: ['vite-plugin-supported-browserslist']
                }
            }
        },
    }
}