import React, { useEffect } from 'react'

// import { Axios } from 'axios';
var Autodesk = window.Autodesk;

function Viewer() {
    var result;
    var axios = require("axios");

    const getToken = async () => {
        await axios
            .request({
                method: "POST",
                url: "https://developer.api.autodesk.com/authentication/v1/authenticate",
                headers: { "content-type": "application/x-www-form-urlencoded" },
                data: new URLSearchParams({
                    grant_type: "client_credentials",
                    client_id: process.env.REACT_APP_APS_CLIENT_ID,
                    client_secret: process.env.REACT_APP_APS_CLIENT_SECRET,
                    scope: "data:write data:read bucket:create bucket:delete",
                }),
            })
            .then(function (res) {
                result = res.data.access_token;
            });

        return result;
    };

    const initializeViewer = async () => {
        const token = await getToken();
        // console.log(token);

        var options = {
            env: "AutodeskProduction",
            api: 'streamingV2',
            language: "en",
            accessToken: token
        };

        Autodesk.Viewing.Initializer(options, function () {

            var htmlDiv = document.getElementById('forgeViewer');
            var viewer = new Autodesk.Viewing.GuiViewer3D(htmlDiv);
            viewer.start();

            var documentId = 'urn:dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6bXktYnVja2V0L215LWF3ZXNvbWUtZm9yZ2UtZmlsZS5ydnQ';
            Autodesk.Viewing.Document.load(documentId, onDocumentLoadSuccess, onDocumentLoadFailure);

            function onDocumentLoadSuccess(viewerDocument) {
                var defaultModel = viewerDocument.getRoot().getDefaultGeometry();
                viewer.loadDocumentNode(viewerDocument, defaultModel);
            }

            function onDocumentLoadFailure() {
                console.error('Failed fetching Forge manifest');
            }
        });
    }

    useEffect(() => {
        initializeViewer();
    }, [])

    return (
        <> <button> test </button> </>
    )
}


export default Viewer