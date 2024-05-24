
import { Page, Layout, Card } from '@shopify/polaris';
import React from 'react';


export default function Index() {


  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card>
            <div style={{ height: '100vh' }}>
              <iframe
                src="https://mockey.ai"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                title="Embedded Website"
              />
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
