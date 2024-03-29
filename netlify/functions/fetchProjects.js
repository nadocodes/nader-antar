const contentful = require('contentful');

exports.handler = async function(event, context) {
    const client = contentful.createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });

    try {
        // Fetch entries of the 'projects' content type
        const data = await client.getEntries({
            content_type: 'projects', // Use the ID of your content model here
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data.items),
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ msg: error.toString() }) };
    }
};
