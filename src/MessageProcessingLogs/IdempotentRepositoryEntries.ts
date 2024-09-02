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
import type { IdempotentRepositoryEntriesApi } from './IdempotentRepositoryEntriesApi';

/**
 * This class represents the entity "IdempotentRepositoryEntries" of service "com.sap.hci.api".
 */
export class IdempotentRepositoryEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IdempotentRepositoryEntriesType<T>
{
  /**
   * Technical entity name for IdempotentRepositoryEntries.
   */
  static override _entityName = 'IdempotentRepositoryEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IdempotentRepositoryEntries entity.
   */
  static _keys = ['HexSource', 'HexEntry'];
  /**
   * Hex Source.
   */
  declare hexSource: DeserializedType<T, 'Edm.String'>;
  /**
   * Hex Entry.
   */
  declare hexEntry: DeserializedType<T, 'Edm.String'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry.
   * @nullable
   */
  declare entry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Component.
   * @nullable
   */
  declare component?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Time.
   * @nullable
   */
  declare creationTime?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Expiration Time.
   * @nullable
   */
  declare expirationTime?: DeserializedType<T, 'Edm.Int64'> | null;

  constructor(_entityApi: IdempotentRepositoryEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface IdempotentRepositoryEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hexSource: DeserializedType<T, 'Edm.String'>;
  hexEntry: DeserializedType<T, 'Edm.String'>;
  source?: DeserializedType<T, 'Edm.String'> | null;
  entry?: DeserializedType<T, 'Edm.String'> | null;
  component?: DeserializedType<T, 'Edm.String'> | null;
  creationTime?: DeserializedType<T, 'Edm.Int64'> | null;
  expirationTime?: DeserializedType<T, 'Edm.Int64'> | null;
}
