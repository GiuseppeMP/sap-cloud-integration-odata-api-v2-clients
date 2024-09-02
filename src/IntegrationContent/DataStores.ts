/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { DataStoresApi } from './DataStoresApi';
import { DataStoreEntries, DataStoreEntriesType } from './DataStoreEntries';

/**
 * This class represents the entity "DataStores" of service "com.sap.hci.api".
 */
export class DataStores<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DataStoresType<T>
{
  /**
   * Technical entity name for DataStores.
   */
  static override _entityName = 'DataStores';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataStores entity.
   */
  static _keys = ['DataStoreName', 'IntegrationFlow', 'Type'];
  /**
   * Data Store Name.
   */
  declare dataStoreName: DeserializedType<T, 'Edm.String'>;
  /**
   * Integration Flow.
   */
  declare integrationFlow: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   */
  declare type: DeserializedType<T, 'Edm.String'>;
  /**
   * Visibility.
   * @nullable
   */
  declare visibility?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Messages.
   * @nullable
   */
  declare numberOfMessages?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Number Of Overdue Messages.
   * @nullable
   */
  declare numberOfOverdueMessages?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * One-to-many navigation property to the {@link DataStoreEntries} entity.
   */
  declare entries: DataStoreEntries<T>[];

  constructor(_entityApi: DataStoresApi<T>) {
    super(_entityApi);
  }
}

export interface DataStoresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataStoreName: DeserializedType<T, 'Edm.String'>;
  integrationFlow: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  visibility?: DeserializedType<T, 'Edm.String'> | null;
  numberOfMessages?: DeserializedType<T, 'Edm.Int64'> | null;
  numberOfOverdueMessages?: DeserializedType<T, 'Edm.Int64'> | null;
  entries: DataStoreEntriesType<T>[];
}
