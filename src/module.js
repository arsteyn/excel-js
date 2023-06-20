
async function f() {
  await Promise.resolve().then(() => {
    console.log('Resolved')
  })
}

f()
