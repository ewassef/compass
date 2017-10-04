const app = require('hadron-app');
const pkg = require('../../package.json');
const path = require('path');
const os = require('os');
const AppRegistry = require('hadron-app-registry');
const PluginManager = require('hadron-plugin-manager');
const debug = require('debug')('mongodb-compass:setup-plugin-manager');

app.appRegistry = new AppRegistry();

/**
 * Location of the internal plugins.
 */
const INTERNAL_PLUGINS = path.join(__dirname, '..', 'internal-plugins');

/**
 * The root dir.
 */
const ROOT = path.join(__dirname, '..', '..');

/**
 * The current distribution information.
 */
const DISTRIBUTION = pkg.config.hadron.distributions[process.env.HADRON_DISTRIBUTION];

/**
 * The plugins directory constant.
 */
const PLUGINS_DIR = 'plugins-directory';

/**
 * Location of the dev plugins.
 */
const DEV_PLUGINS = path.join(os.homedir(), DISTRIBUTION[PLUGINS_DIR]);

/**
 * @note: The 2nd and 3rd arguments are the root directory and an array
 *   of packages for the distribution and their relative paths from the
 *   root directory.
 */
app.pluginManager = new PluginManager(
  [ INTERNAL_PLUGINS, DEV_PLUGINS ],
  ROOT,
  DISTRIBUTION.plugins
);

app.pluginManager.activate(app.appRegistry);

debug(`Plugin manager activated with distribution ${process.env.HADRON_DISTRIBUTION}.`);