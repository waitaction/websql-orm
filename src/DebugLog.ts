/**
 * 调试日志
 */
export class DebugLog {
    static debug(msg: any) {
        if (this.enable) {
            console.log(msg);
        }
    }
    /**
     *是否启用
     */
    static enable: boolean;
}