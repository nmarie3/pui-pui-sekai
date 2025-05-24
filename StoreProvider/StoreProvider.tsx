'use client';
import store from '@/Store/store'
import {Provider} from "react-redux"

const StoreProvider = ({children}: {children:React.ReactNode}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default StoreProvider
