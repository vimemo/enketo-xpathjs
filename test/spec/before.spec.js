before( done => {
    console.log( 'running root before' );
    // run asynchronous operation before any tests
    const iframe = document.createElement( 'iframe' );
    iframe.setAttribute( 'src', '/base/test/doc.xml' );
    iframe.setAttribute( 'id', 'testframe' );
    iframe.onload = () => {

        const script = document.createElement( 'script' );
        // TODO: should load parser and engine separately to facilitate development
        script.setAttribute( 'src', '/base/dist/orxe.min.js' );

        script.onload = () => {
            iframe.contentWindow.orxe.bindDomLevel3XPath();
        };

        const script2 = document.createElement( 'script' );
        // script2.setAttribute( 'src', 'https://cdn.jsdelivr.net/npm/node-forge@0.7.0/dist/forge.min.js' );
        script2.setAttribute( 'src', '/base/dist/forge.min.js' );

        script2.onload = () => {
            done();
        };

        iframe.contentWindow.document.querySelector( 'body' ).appendChild( script );
        iframe.contentWindow.document.querySelector( 'body' ).appendChild( script2 );
    };
    document.body.appendChild( iframe );
} );


/*
import XPathJS from '../src/XPathJS';

const load = fetch( '/base/test/doc.xml')
    .then( response => response.text())
    .then( txt => new DOMParser().parseFromString( txt,'application/xhtml+xml' ));

const docwin = () => {
    return load.then( doc => {
        //console.log('doc', doc);
        XPathJS.bindDomLevel3XPath(doc);
        console.log('r', r);
        return  {
            doc: doc,
            win: window
        };
    });
};
*/
