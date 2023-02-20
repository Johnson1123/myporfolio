import sanityClient from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    // run sanity manage on backensd dir to get the following data
    projectId: '5vdprfai',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: 'true',
    token:'skjv8OMJsqgxqTOvp9hLuewtkuFgpMEgihZGldgB1H1NDzJtrWM7cEBGXs2tzIbYCQTESnDsEjCjT1yfCs74SfyV3D18GDzyqU9hWy9XbU9OkWpSZozKFS2Ib8rT4AEGhcf6Fro2wZEeNoZCuL9MHnnV0hFqeRPhXYTANVIuFQwGHwOE8B4o'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);