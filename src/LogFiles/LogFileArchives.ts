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
import type { LogFileArchivesApi } from './LogFileArchivesApi';

/**
 * This class represents the entity "LogFileArchives" of service "com.sap.hci.api".
 */
export class LogFileArchives<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LogFileArchivesType<T>
{
  /**
   * Technical entity name for LogFileArchives.
   */
  static override _entityName = 'LogFileArchives';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LogFileArchives entity.
   */
  static _keys = ['Scope', 'LogFileType', 'NodeScope'];
  /**
   * Scope.
   */
  declare scope: DeserializedType<T, 'Edm.String'>;
  /**
   * Log File Type.
   */
  declare logFileType: DeserializedType<T, 'Edm.String'>;
  /**
   * Node Scope.
   */
  declare nodeScope: DeserializedType<T, 'Edm.String'>;
  /**
   * Content Type.
   * @nullable
   */
  declare contentType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: LogFileArchivesApi<T>) {
    super(_entityApi);
  }
}

export interface LogFileArchivesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  scope: DeserializedType<T, 'Edm.String'>;
  logFileType: DeserializedType<T, 'Edm.String'>;
  nodeScope: DeserializedType<T, 'Edm.String'>;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
}
