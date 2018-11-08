<script type="text/javascript">
function reinitIframe() {
    var iframe = document.getElementById("frame");
    try {
        var bHeight = iframe.contentWindow.document.body.scrollHeight;
 
        var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
 
        var height = Math.max(bHeight, dHeight);
 
        iframe.height = height;
 
    } catch (ex) {}
 
}
window.setInterval("reinitIframe()", 200);
</script>
