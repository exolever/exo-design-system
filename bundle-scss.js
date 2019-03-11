/**
 * The package scss-bundle don't accept multiples entry/dest files, so i create this script to
 * load an array of { entry: 'Main entry file where to start bundling.', dest: 'Destination file when bundling is done' }
 * and create different bundles on the dist folder.
 */

const data = require('./scss-bundle.config');
const exec = require('child_process').exec;

for (const item of data) {

  exec('./node_modules/.bin/scss-bundle -e ' + item.entry + ' -d ' + item.dest, function(err, stdout) {

    if (err) {
      console.error(err);
      return;
    }

    console.log('SUCCESS: ', stdout)
  });

}
