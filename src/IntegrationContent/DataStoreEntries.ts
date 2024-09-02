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
import type { DataStoreEntriesApi } from './DataStoreEntriesApi';

/**
 * This class represents the entity "DataStoreEntries" of service "com.sap.hci.api".
 */
export class DataStoreEntries<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DataStoreEntriesType<T>
{
  /**
   * Technical entity name for DataStoreEntries.
   */
  static override _entityName = 'DataStoreEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DataStoreEntries entity.
   */
  static _keys = ['Id', 'DataStoreName', 'IntegrationFlow', 'Type'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
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
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Message Id.
   * @nullable
   */
  declare messageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Due At.
   * @nullable
   */
  declare dueAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created At.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Retain Until.
   * @nullable
   */
  declare retainUntil?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(_entityApi: DataStoreEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface DataStoreEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  dataStoreName: DeserializedType<T, 'Edm.String'>;
  integrationFlow: DeserializedType<T, 'Edm.String'>;
  type: DeserializedType<T, 'Edm.String'>;
  status?: DeserializedType<T, 'Edm.String'> | null;
  messageId?: DeserializedType<T, 'Edm.String'> | null;
  dueAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  retainUntil?: DeserializedType<T, 'Edm.DateTime'> | null;
}
