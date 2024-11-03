import type { Plugin } from "vite"
import { getUserAgentRegex, type UserAgentRegexOptions } from "browserslist-useragent-regexp"

export default function supportedBrowser(options?: UserAgentRegexOptions): Plugin {
    const packageName = 'vite-plugin-supported-browserslist';

    const virtualModuleId = `virtual:${packageName}`
    const resolvedVirtualModuleId = '\0' + virtualModuleId

    return {
        name: virtualModuleId,
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
                    exclude: [packageName]
                },
                ssr: {
                    optimizeDeps: {
                        exclude: [packageName]
                    },
                    noExternal: [packageName]
                }
            }
        },
    }
}