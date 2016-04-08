
function injectLoopWatcher(t, path, state) {

  let {node, scope} = path;
  const ident = scope.generateUidIdentifier().name;

  if( scope.hasBinding("_looptar") === false ){
    path.hub.file.addImport("looptar", "default", "_looptar");
  }

  // https://github.com/thejameskyle/babel-handbook/blob/master/translations/en/plugin-handbook.md#do-not-traverse-when-manual-lookup-will-do
  node.body.body.unshift(t.expressionStatement(
    t.callExpression(
      t.memberExpression(
        t.identifier("_looptar"),
        t.identifier("iterates")
      ),
      [t.stringLiteral(ident)]
    )
  ));

  path.insertAfter(
    t.expressionStatement(
      t.callExpression(
        t.memberExpression(
          t.identifier("_looptar"),
          t.identifier("exits")
        ),
        [t.stringLiteral(ident)]
      )
    )
  );

}

export default function({ types: t }) {
  const typedInjector = (path, state) => injectLoopWatcher(t, path, state);

  return {
    visitor: {
      DoWhileStatement: typedInjector,
      ForInStatement: typedInjector,
      ForOfStatement: typedInjector,
      ForStatement: typedInjector,
      WhileStatement: typedInjector,
    }
  };
}
