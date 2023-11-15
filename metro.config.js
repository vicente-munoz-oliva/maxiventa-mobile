const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
   /*  resolver: {
        unstable_enableSymlinks: true,
        unstable_enablePackageExports: true,
        unstable_conditionNames: ['http'],

      }, */
};



module.exports = mergeConfig(getDefaultConfig(__dirname), config);
