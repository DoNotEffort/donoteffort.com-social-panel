function noAuth(redirect) {
  redirect('https://donoteffort.com/products/social')
}

export default async ({ app, store, redirect }) => {
  const token = app.$cookies.get('token')
  if (token) {
    const decodedToken = await app.store.dispatch('authentication/decodeJwtToken', token)
    if (decodedToken)
      await app.store.commit('authentication/setUser', decodedToken.user)
    else
      noAuth(redirect)

  } else
    noAuth(redirect)
}