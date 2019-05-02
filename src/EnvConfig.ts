/**
 * 环境配置
 */
export class EnvConfig {
    /**
     * 调试日志
     */
    static debug(msg: any) {
        if (this.enableDebugLog) {
            console.log(msg);
        }
    }
    /**
     * If you use the native sqlite, you will need to install the cordova plugin. 
     * cordova plugin add cordova-sqlite-storage
     */
    static useCordovaSqliteStorage: boolean;
    /**
     *是否启用
     */
    static enableDebugLog: boolean;
}