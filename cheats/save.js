const SaveFile = (file, data)=>{
    let e = document.createElement('a');
    e.setAttribute(
        'style',
        'display: none'
    );
    e.setAttribute(
        'href', 
        window.URL.createObjectURL(
            new Blob(
                [data], 
                {type: 'octet/stream'}
            )
        )
    );
    e.setAttribute('download', file);
    document.body.appendChild(e);
    e.click();
    window.URL.revokeObjectURL(
        e.getAttribute('href')
    );
    e.remove();
};

