//$.base64.btoa(this.value)
interface JQueryStatic{
    
    base64:JqueryBase64;

}

interface JqueryBase64{
    
    btoa(val:any):string;

}

declare var $: JQueryStatic;