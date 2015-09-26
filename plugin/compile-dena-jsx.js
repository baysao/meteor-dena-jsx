var exec = Npm.require('child_process').exec;
var fs =Npm.require('fs');

function JSXXCompiler() {}
JSXXCompiler.prototype.processFilesForTarget = function (files) {
  files.forEach(function (file) {
  	var fileInput = file.getPathInPackage();
  	var fileOutput = file.getPathInPackage() + '.js';
  	var command = ['env jsx --release --minify',fileInput];
  	var child = exec(command.join(' '), function(error, stdout, stderr) {
			if(!error) {
				stdout = stdout + ';JSX.runMain = function (sourceFile, args) {var module = JSX.require(sourceFile); if (! module) {throw new ReferenceError("entry point module not found in " + sourceFile); } if (! module._Main) {throw new ReferenceError("entry point _Main not found in " + sourceFile); } if (! module._Main.main) {throw new ReferenceError("entry point _Main.main(:string[]):void not found in " + sourceFile); } module._Main.main(args); }; this.JSX = JSX;'; 
				fs.writeFile(fileOutput, stdout, function (err) {
					if(!err) {
						file.addJavaScript({
							path: fileOutput,
							data: stdout
					    });
					}
				});
			}
	});
  });
};


Plugin.registerCompiler({
  extensions: ["jsxx"],
  filenames: []
}, function () {
  return new JSXXCompiler();
});