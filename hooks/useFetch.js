import React, { useState } from 'react'
export default function useFetch(url, method) {

  const [request, setRequest] = useState(false)

  const setRequestRunning = ({ data, onSuccess, onFail }) => {
    // se c'è già una chiamata in corso non ne facciamo partire un'altra
    if (request) return

    setRequest(true)
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then((response) => {
      return response.json()
    }).then((response) => {
      /**
       * Sappiamo che la risposta del server arriva sempre in questo modo:
       * {
       *   result: true | false,
       *   payload: Object | null,
       *   errors: [
       *     { code: string, message: string }
       *   ]
       * }
       */
      if (response.result) {
        if (onSuccess) {
          onSuccess(response.payload)
        }
      } else if (onFail) {
        /**
         * Sappiamo anche che errors torna un array con sempre e solo
         * un oggetto, quindi usiamo il primo -> [0]
         */
        onFail(response.errors[0].message)
      }
    }).catch((e) => {
      if (onFail) {
        onFail(e)
      }
    }).finally(() => {
      // viene eseguito sia in caso di risposta positiva che in caso di errore
      setRequest(false)
    })
  }

  return [request, setRequestRunning]
}