import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

function Seo({ title, lang, meta, keywords, pathname }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription = data.site.siteMetadata.description;
        const metaTitle = data.site.siteMetadata.title;
        const metaKeywords = data.site.siteMetadata.metaKeywords;

        const canonical = pathname
          ? `${data.site.siteMetadata.siteUrl}${pathname}`
          : null;

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={metaTitle}
            titleTemplate={`%s | byte - Bayerische Agentur für Digitales`}
            link={
              canonical
                ? [
                    {
                      rel: "canonical",
                      href: canonical,
                    },
                  ]
                : []
            }
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              }
            ]
              .concat(
                metaKeywords && metaKeywords.length > 0
                  ? {
                      name: `keywords`,
                      content: metaKeywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        );
      }}
    />
  );
}

Seo.defaultProps = {
  lang: `de`,
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.array,
  description: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default Seo;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
        metaKeywords
      }
    }
  }
`;
