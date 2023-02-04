async function updateTimestamps({ event, dql, graphql }) {
  console.log("somthing");
  //   const op = event.operation === "delete" ? "delete" : "set";
  //   const field = event.operation === "add" ? "createdAt" : "updatedAt";
  //   const uid = event[event.operation].rootUIDs[0];
  //   const type = event.__typename;
  //   const invType = type.toLowerCase();
  //   const date = new Date().toISOString();
  //   const child = "Timestamp";
  //   const invChild = child.toLowerCase();
  //   const args = `
  //         upsert {
  //             query {
  //                 t as var(func: type(${child}))
  //                 @filter(uid_in(${child}.${invType}, ${uid}))
  //             }
  //             mutation @if(eq(len(t), 1)) {
  //                 ${op} {
  //                     <${uid}> <${type}.${invChild}> uid(t) .
  //                     uid(t) <${child}.${invType}> <${uid}> .
  //                     uid(t) <${child}.${field}> "${date}" .
  //                     uid(t) <dgraph.type> "${child}" .
  //                 }
  //             }
  //             mutation @if(eq(len(t), 0)) {
  //                 ${op} {
  //                     <${uid}> <${type}.${invChild}> _:new .
  //                     _:new <${child}.${invType}> <${uid}> .
  //                     _:new <${child}.${field}> "${date}" .
  //                     _:new <dgraph.type> "${child}" .
  //                 }
  //             }
  //         }`;
  //   const r = await dql.mutate(args);
  //   console.log("somthing");
  //   console.log(r);
}

self.addWebHookResolvers({
  "User.add": updateTimestamps,
  "User.update": updateTimestamps,
  "User.delete": updateTimestamps,
});
