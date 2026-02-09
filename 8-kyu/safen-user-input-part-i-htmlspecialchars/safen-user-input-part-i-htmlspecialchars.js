function htmlspecialchars(formData) {
    const map = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '&': '&amp;',
    };
  
    return formData.replace(/[<>"&]/g, char => map[char]);
}