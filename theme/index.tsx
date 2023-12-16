import Theme from 'rspress/theme';

const Layout = () => (
    <Theme.Layout
        bottom = {<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "d7b5f82b1aed489a98aa1f2ac4ead3b6"}'></script>}
    />
);

export default {
    ...Theme,
    Layout,
};

export * from 'rspress/theme';
