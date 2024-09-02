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
import type { HistoryKeystoreEntriesApi } from './HistoryKeystoreEntriesApi';

/**
 * This class represents the entity "HistoryKeystoreEntries" of service "com.sap.hci.api".
 */
export class HistoryKeystoreEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements HistoryKeystoreEntriesType<T>
{
  /**
   * Technical entity name for HistoryKeystoreEntries.
   */
  static override _entityName = 'HistoryKeystoreEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the HistoryKeystoreEntries entity.
   */
  static _keys = [];
  /**
   * Activated By.
   * Maximum length: 150.
   * @nullable
   */
  declare activatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active From.
   * @nullable
   */
  declare activeFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Deactivated By.
   * Maximum length: 150.
   * @nullable
   */
  declare deactivatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Active Until.
   * @nullable
   */
  declare activeUntil?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Activation Sequence Number.
   * @nullable
   */
  declare activationSequenceNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Original Alias.
   * Maximum length: 250.
   * @nullable
   */
  declare originalAlias?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: HistoryKeystoreEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface HistoryKeystoreEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  activatedBy?: DeserializedType<T, 'Edm.String'> | null;
  activeFrom?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  deactivatedBy?: DeserializedType<T, 'Edm.String'> | null;
  activeUntil?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  activationSequenceNumber?: DeserializedType<T, 'Edm.Int32'> | null;
  originalAlias?: DeserializedType<T, 'Edm.String'> | null;
}
