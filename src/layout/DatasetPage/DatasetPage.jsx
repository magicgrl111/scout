import React, { useState, useEffect } from 'react';
import moment from 'moment';
import RawHTML from '../../components/RawHTML/RawHTML';
import ColumnMatchTable from '../../components/ColumnMatchTable/ColumnMatchTable';
import Dataset from '../../components/Dataset/Dataset';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import '../../components/Loading/Loading.scss';
import usePageView from '../../hooks/analytics';
import { useCurrentCollection } from '../../hooks/collections';
import {
  useDataset,
  useJoinableDatasets,
  useGetSimilarDatasets,
} from '../../hooks/datasets';
import './DatasetPage.scss';
import ViewOnOpenPortal from '../../components/ViewOnOpenPortal/ViewOnOpenPortal';

const formatDate = (date) => moment(date).format('MMMM DD, YYYY');

export default function DatasetPage({ match }) {
  usePageView();
  const { datasetID } = match.params;
  const dataset = useDataset(datasetID);
  const parentId = dataset ? dataset.resource.parent_fxf : null;
  const parentDataset = useDataset(parentId);
  const joins = useJoinableDatasets(dataset);
  const [activeTab, setActiveTab] = useState('joins');
  const resource = dataset?.resource;
  const pageViews = resource?.page_views;
  const classification = dataset?.classification;
  const domainMetadata = classification?.domain_metadata;
  const similarDatasets = useGetSimilarDatasets(datasetID);

  useEffect(() => {
    const page = `${window.location.pathname}/${activeTab}`;
    window.fathom('trackPageview', { path: page });
  }, [activeTab]);
  useEffect(() => {
    window.fathom('trackPageview', { path: '/about' });
  }, []);

  const mostSimilarDatasets = similarDatasets
    .filter(
      (suggestion) =>
        suggestion.dataset && suggestion.dataset.resource.id !== datasetID,
    )
    .slice(0, 10);
  const renderNotFound = (currentDataset, parentData) => {
    if (parentData) {
      return (
        <p className="intro">
          This dataset is actually a view of dataset{' '}
          {parentData?.resource?.name}
        </p>
      );
    }
    if (currentDataset?.resource?.type === 'file') {
      return (
        <p className="intro">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          This resource points of a file which we currently don't have the
          ability to analyse. We are working to bring more types of data to
          Scout. Check back shortly
        </p>
      );
    }
    if (currentDataset?.resource?.type === 'href') {
      return (
        <p className="intro">
          This resource is actually just a link to a website resource. We
          currently dont have the ability to provide information on such
          resources
        </p>
      );
    }
    return (
      <p className="intro">
        We currently dont have the ability to analyse this dataset.
      </p>
    );
  };
  const [
    collection,
    { addToCollection, removeFromCollection },
  ] = useCurrentCollection();

  const updatedAutomation = domainMetadata?.find(
    ({ key, value }) => key === 'Update_Automation' && value === 'No',
  )?.value;

  const updateFrequency = domainMetadata?.find(
    ({ key }) => key === 'Update_Update-Frequency',
  )?.value;

  const informationAgency = domainMetadata?.find(
    ({ key }) => key === 'Dataset-Information_Agency',
  )?.value;

  return (
    <div className="dataset-page" key={resource ? resource.id : 'unknown'}>
      <div className="dataset-details">
        <section>
          <Breadcrumb currentPage={resource ? resource.name : '...'} />
        </section>
        <section>
          <h2 className={resource ? '' : 'animate'}>{resource?.name}</h2>
          <p className={resource ? '' : 'animate'}>{informationAgency}</p>
          <RawHTML
            className={resource ? '' : 'animate'}
            html={resource?.description}
          />
          <button
            type="button"
            className="collection-button"
            disabled={!resource}
            onClick={() =>
              collection.datasets.includes(datasetID)
                ? removeFromCollection(collection.id, datasetID)
                : addToCollection(collection.id, datasetID)
            }
          >
            {collection.datasets.includes(datasetID)
              ? 'Remove From Collection'
              : 'Add to Collection'}{' '}
          </button>
        </section>
        <section className="external-link">
          <p>Powered by</p>
          <img
            alt="NYC Open Data"
            src="https://opendata.cityofnewyork.us/wp-content/themes/opendata-wp/assets/img/nyc-open-data-logo.svg"
          />
          <ViewOnOpenPortal permalink={dataset ? dataset?.permalink : '#'} />
        </section>
        <section className="metadata">
          <h2>Metadata</h2>
          <h3>Update Automation</h3>
          <p>{updatedAutomation}</p>
          <h3>Update Frequency</h3>
          <p>{updateFrequency}</p>
          <h3>Dataset Owner</h3>
          <p>{dataset?.owner?.display_name}</p>
          {informationAgency && (
            <>
              <h3>Agency</h3>
              <p>{informationAgency}</p>
            </>
          )}
          {classification?.domain_category && (
            <>
              <h3>Category</h3>
              <p>{classification.domain_category}</p>
            </>
          )}
          <h3>Updated</h3>
          <p>{formatDate(resource?.updatedAt)}</p>
          <h3>Metadata Updated at</h3>
          <p>{formatDate(resource?.metadata_updated_at)}</p>
          <h3>Page Views</h3>
          <p>{pageViews?.page_views_total}</p>
        </section>
      </div>
      <div className="dataset-recomendataions">
        <h2>Other datasets to consider</h2>
        <div className="tabs">
          <button
            type="button"
            className={activeTab === 'joins' ? 'active' : ''}
            onClick={() => setActiveTab('joins')}
          >
            Potential Join Columns
          </button>
          <button
            type="button"
            className={activeTab === 'theme' ? 'active' : ''}
            onClick={() => setActiveTab('theme')}
          >
            Thematically Similar
          </button>
        </div>
        {activeTab === 'joins' &&
          (!dataset || dataset?.resource?.columns_field_name.length > 0 ? (
            <>
              <p className="intro">
                Find datasets that share a column with the current dataset.
              </p>{' '}
              <p>
                {' '}
                These columns might be interesting datasets to join with the
                current dataset to add additional details or bring in context
              </p>
              <ColumnMatchTable dataset={dataset} joinColumns={joins} />
            </>
          ) : (
            renderNotFound(dataset, parentDataset)
          ))}
        {activeTab === 'theme' && (
          <>
            <p>
              Dataset that are thematically similar based on name and
              description
            </p>
            <div className="dataset-recomendataions-theme-list">
              {mostSimilarDatasets?.map((d) => (
                <Dataset
                  onAddToCollection={() =>
                    addToCollection(collection.id, d.dataset.resource.id)
                  }
                  onRemoveFromCollection={() =>
                    removeFromCollection(collection.id, d.dataset.resource.id)
                  }
                  dataset={d.dataset}
                  similarity={d.similarity}
                  inCollection={collection.datasets.includes(
                    d.dataset.resource.id,
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
