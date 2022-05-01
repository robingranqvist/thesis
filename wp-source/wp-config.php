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
define( 'DB_NAME', 'thesis_wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1:3308' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'JX.EFN{W*@EWm$n:{6B2>Q&vu7tX`]5ioyC6A82h^ARFyB6]gEAAwR9ri)E#|0gY' );
define( 'SECURE_AUTH_KEY',  '*v#nA#f6)Dw@`:JtYF<;)Fi]IA~5X,_ID(&8|`!k|ui-fvP48L#t)D6m)a~pMV8|' );
define( 'LOGGED_IN_KEY',    'U+5n+_?&GXciY_3<zR)Omb!2]?r!$>V+rlOZHF#AQPJV^3_Gbv^anll_h+fKGBE-' );
define( 'NONCE_KEY',        '>g{Gob+Hm|3&&#O;|{F5{xz6kpt=5hNEFHK<wm#)ehy<+~2[^,rsO$_enz+SnNS9' );
define( 'AUTH_SALT',        '%w%RH}r=5AunB7iORT`>yv^vnGsvk6GQeYpH!d-8b*ZvJl#KjNf.U{a|#qh(T}M+' );
define( 'SECURE_AUTH_SALT', 'YGhk)|Yy?jhS,*?mSJ=`ze7!=~/(p/q,+zQs=l9c5AztA&zz IF<(1_o+Twux+J@' );
define( 'LOGGED_IN_SALT',   '}felvt#kgK>vYCh7!T;{|2qeX)YcyF=&9|0hbGr3v.DhA}%AvoCQnj1_}3|ynGV9' );
define( 'NONCE_SALT',       'Q ;uaS9xBbnf<kbda:-P7L`T)qNC1};[tU~IONGe/(j)!k10r.$0n@S sB{|T1S`' );

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



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';