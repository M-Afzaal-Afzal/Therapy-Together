import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/utils/theme';
import {Provider} from 'react-redux'
import {useStore} from '../src/store/store'
import Layout from "../components/Layout/Layout";
import {persistStore} from "redux-persist";
import {PersistGate} from 'redux-persist/integration/react'
import {SnackbarProvider} from "notistack";
import {addCollectionAndDocuments} from "../src/utils/firebaseUtils";
import blogsData from "../src/utils/blogs.data";
import {AnimatePresence} from "framer-motion";


export default function MyApp(props) {
    const store = useStore(props.pageProps.initialReduxState)

    let persistor = persistStore(store)

    const {Component, pageProps} = props;

    React.useEffect(() => {

        // addCollectionAndDocuments('blogs',blogsData)
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Therapy Together</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <ThemeProvider theme={theme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline/>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Layout>
                            <SnackbarProvider>
                                <AnimatePresence exitBeforeEnter>
                                    <Component {...pageProps} />
                                </AnimatePresence>
                            </SnackbarProvider>
                        </Layout>
                    </PersistGate>
                </Provider>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
}
