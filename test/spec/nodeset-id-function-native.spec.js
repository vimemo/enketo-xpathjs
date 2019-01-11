// TODO: move these to nodeset-native.spec.js? Why are these separate?

describe( 'nodeset id() function', () => {

    it( 'works for a simple case', () => {
        const node = doc.getElementById( 'FunctionNodesetIdCaseSimple' );
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdCaseSimple')", doc, [
            node
        ] );
    } );

    it( 'works if ID is provided in duplicate', () => {
        const node = doc.getElementById( 'FunctionNodesetIdCaseSimple' );
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdCaseSimple FunctionNodesetIdCaseSimple')", doc, [
            node
        ] );
    } );

    it( 'returns empty result for non-existing ID', () => {
        checkNodeResult( "id('FunctionNodesetIdCaseSimpleDoesNotExist')", doc, [] );
    } );

    it( 'returns empty result if the default namespace for the node is empty', () => {
        const node = doc.getElementById( 'FunctionNodesetIdCaseNoDefaultNamespaceContainer' ).firstChild;
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdCaseNoDefaultNamespace')", doc, [] );
    } );

    it( 'works if the default namespace for the node is the XHTML namespace', () => {
        const node = doc.getElementById( 'FunctionNodesetIdCaseXhtmlDefaultNamespaceContainer' ).firstChild;
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdCaseXhtmlDefaultNamespace')", doc, [
            node
        ] );
    } );

    it( 'works if the namespace of the id attribute is the XHTML namespace', () => {
        const node = doc.getElementById( 'FunctionNodesetIdCaseXhtmlNamespaceContainer' ).firstChild;
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdCaseXhtmlNamespace')", doc, [
            node
        ] );
    } );

    it( 'works if the namespace of the id attribute is defined in the parent container', () => {
        const node = doc.getElementById( 'FunctionNodesetIdCaseXhtmlNamespaceParentContainer' ).firstChild;
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdCaseXhtmlNamespaceParent')", doc, [
            node
        ] );
    } );

    it( 'works if the id attribute has the xml namespace alias', () => {
        const node = doc.getElementById( 'FunctionNodesetIdXmlNamespaceContainer' ).firstChild;
        expect( node ).to.be.an( 'object' );

        checkNodeResult( "id('FunctionNodesetIdXmlNamespace')", doc, [
            node
        ] );
    } );

    it( 'works if multiple space-separated IDs are provided as the parameter', () => {
        checkNodeResult( "id('FunctionNodesetIdCaseMultiple1 FunctionNodesetIdCaseMultiple2 FunctionNodesetIdCaseMultiple3')", doc, [
            doc.getElementById( 'FunctionNodesetIdCaseMultiple1' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple2' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple3' )
        ] );
    } );

    it( 'works if multiple space/newline/table-separated IDs are provided as the parameter', () => {
        checkNodeResult( "id('  FunctionNodesetIdCaseMultiple1 sss FunctionNodesetIdCaseMultiple2\r\n\tFunctionNodesetIdCaseMultiple3\t')", doc, [
            doc.getElementById( 'FunctionNodesetIdCaseMultiple1' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple2' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple3' )
        ] );
    } );

    it( 'works if a nodeset is provided as the argument (by using the content of the nodeset)', () => {
        checkNodeResult( "id(.)", doc.getElementById( 'FunctionNodesetIdCaseNodeset' ), [] );

        // this test is tricky, the argument is the CONTENT of the FunctionNodesetIdCaseNodeset element!
        checkNodeResult( "id(child::*)", doc.getElementById( 'FunctionNodesetIdCaseNodeset' ), [
            doc.getElementById( 'FunctionNodesetIdCaseMultiple1' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple2' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple3' ),
            doc.getElementById( 'FunctionNodesetIdCaseMultiple4' )
        ] );
    } );
} );
