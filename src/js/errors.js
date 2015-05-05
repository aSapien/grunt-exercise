define(['lodash', 'utils'], function(_, utils){
    'use strict';

    var logger = utils.logger;

    /**
     * Please ctrl/cmd + click on biError to see the schema :)
     * @type {Object.<String, biError>}
     */
    var errors = {
        /**
         * Add new ERRORS here!
         */
        TPA_ERROR: {
            'errorCode': 190,
            'desc': 'general tpa error',
            'severity': 'error',
            params: {
                error_type: 'errorType',
                error_desc: 'errorDesc'
            }
        }

    };

    logger.register('tpa', 'error', errors);

    return errors;
});
