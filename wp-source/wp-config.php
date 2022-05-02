<?php

/**

 * The base configuration for WordPress

 *

 * The wp-config.php creation script uses this file during the installation.

 * You don't have to use the web site, you can copy this file to "wp-config.php"

 * and fill in the values.

 *

 * This file contains the following configurations:

 *

 * * Database settings

 * * Secret keys

 * * Database table prefix

 * * ABSPATH

 *

 * @link https://wordpress.org/support/article/editing-wp-config-php/

 *

 * @package WordPress

 */


// ** Database settings - You can get this info from your web host ** //

/** The name of the database for WordPress */

define( 'DB_NAME', 'bitnami_wordpress' );


/** Database username */

define( 'DB_USER', 'bn_wordpress' );


/** Database password */

define( 'DB_PASSWORD', '081bb2f6341660f80429814d80caf6498e0b431dd98488cd5e38931d5464f7f6' );


/** Database hostname */

define( 'DB_HOST', 'localhost:3306' );


/** Database charset to use in creating database tables. */

define( 'DB_CHARSET', 'utf8' );


/** The database collate type. Don't change this if in doubt. */

define( 'DB_COLLATE', '' );


/**#@+

 * Authentication unique keys and salts.

 *

 * Change these to different unique phrases! You can generate these using

 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.

 *

 * You can change these at any point in time to invalidate all existing cookies.

 * This will force all users to have to log in again.

 *

 * @since 2.6.0

 */

define( 'AUTH_KEY',         'K#0%,U` e|Qe.e&u5<|S7`zYTZr|&:A5 (;.bkeTn>{ !S1!5V~ndv%/?GhMfOdK' );

define( 'SECURE_AUTH_KEY',  'wVLw`Rpg.E*=e0TVq|x+tdeV`5kt7*6uTR$x%:z9OZ^+U&#;Krq]7!ly#I:^bnR|' );

define( 'LOGGED_IN_KEY',    'N28Od=X5ToJ;tFlBIAeK%oj#`$9zxN# Ve?EBORrO*T)3eOI7-Lqm3]Y sy3d:JW' );

define( 'NONCE_KEY',        'O7+TDd=/2?wm kZ>6#Pu6[N,O<rVec!9FrO%6d&e#}).UwJH@n}Wf__|/}`W3!wA' );

define( 'AUTH_SALT',        'va5h~@F)nO?n?=MReqMzxq3Se#*uki@Y1|Ly-717~Pi?x<wY>?9^[V25=G@0`]B%' );

define( 'SECURE_AUTH_SALT', ';;w{YtzZ o-Eu:1$Eq6P:6E5YbxxTB60RHyrF<j KFx8q2@mm22F3^gg[v)z]zEl' );

define( 'LOGGED_IN_SALT',   'VlvB:Fl$sl;ES|xs(,aPKP,@50yTWShNv_X)HX5RK^ ;./YG`H39fYf?x)2SP >,' );

define( 'NONCE_SALT',       'm*#w0l<DmKRvUdv^zG|hCfq7Aa8;FZ1GLs%ZIHSqhwk8xleKdOCnvtQF)CH$ /66' );


/**#@-*/


/**

 * WordPress database table prefix.

 *

 * You can have multiple installations in one database if you give each

 * a unique prefix. Only numbers, letters, and underscores please!

 */

$table_prefix = 'wp_';


/**

 * For developers: WordPress debugging mode.

 *

 * Change this to true to enable the display of notices during development.

 * It is strongly recommended that plugin and theme developers use WP_DEBUG

 * in their development environments.

 *

 * For information on other constants that can be used for debugging,

 * visit the documentation.

 *

 * @link https://wordpress.org/support/article/debugging-in-wordpress/

 */

define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */




define( 'FS_METHOD', 'direct' );
/**
 * The WP_SITEURL and WP_HOME options are configured to access from any hostname or IP address.
 * If you want to access only from an specific domain, you can modify them. For example:
 *  define('WP_HOME','http://example.com');
 *  define('WP_SITEURL','http://example.com');
 *
 */
if ( defined( 'WP_CLI' ) ) {
	$_SERVER['HTTP_HOST'] = '127.0.0.1';
}

define( 'WP_HOME', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST'] . '/' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */


/** Absolute path to the WordPress directory. */

if ( ! defined( 'ABSPATH' ) ) {

	define( 'ABSPATH', __DIR__ . '/' );

}


/** Sets up WordPress vars and included files. */

require_once ABSPATH . 'wp-settings.php';

/**
 * Disable pingback.ping xmlrpc method to prevent WordPress from participating in DDoS attacks
 * More info at: https://docs.bitnami.com/general/apps/wordpress/troubleshooting/xmlrpc-and-pingback/
 */
if ( !defined( 'WP_CLI' ) ) {
	// remove x-pingback HTTP header
	add_filter("wp_headers", function($headers) {
		unset($headers["X-Pingback"]);
		return $headers;
	});
	// disable pingbacks
	add_filter( "xmlrpc_methods", function( $methods ) {
		unset( $methods["pingback.ping"] );
		return $methods;
	});
}
