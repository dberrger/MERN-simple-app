const customResponses = {
    success( payload ) {
        return this.status( 200 ).json( {
            ok: true,
            payload,
        } );
    },

    unauthorized( ) {
        return this.status( 401 ).json( {
            ok: false,
            error: "unauthorized",
        } );
    },

    preconditionFailed( customError ) {
        return this.status( 412 ).json( {
            ok: false,
            error: customError || "precondition_failed",
        } );
    },

    validationError( error ) {
        if ( !error || !error.errors ) {
            return this.serverError( );
        }

        let errorResponse = { };
        const typeFields = extractValidationType( error.errors );
        if ( typeFields.length > 0 ) {
            errorResponse = typeFields;
        }

        return this.unprocessableEntity( errorResponse );
    },
    notFound( ) {
        return this.status( 404 ).json( {
            success: false,
            error: "not_found",
        } );
    },

    serverError( ) {
        return this.status( 503 ).json( {
            success: false,
            error: "server_error",
        } );
    },
};

module.exports = ( req, res, next ) => {
    Object.assign( res, customResponses );
    next( );
};

function extractValidationType( errors ) {
    const fields = Object.keys( errors );
    return fields.map( key => errors[ key ] )
                 .map( validation => ( { errorOnField: validation.path, message: validation.message } ) );
}