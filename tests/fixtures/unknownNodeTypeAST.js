/*
 * This pretends (badly) to be a TypeAlias type node, which would normally be generated by flow-parser from the following code:
 *
 * type aType = {};
 *
 */

define(["esprima"], function(esprima) {
  var program = esprima.parse("var x = 's'")
  program.body[0].type = 'TypeAlias'
  return program
})
