/* eslint-disable react/no-danger */
import * as React from 'react';
import Document, { DocumentContext } from 'next/document';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap"
            rel="stylesheet"
          />
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }
}
