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
import type { LogFilesApi } from './LogFilesApi';

/**
 * This class represents the entity "LogFiles" of service "com.sap.hci.api".
 */
export class LogFiles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements LogFilesType<T>
{
  /**
   * Technical entity name for LogFiles.
   */
  static override _entityName = 'LogFiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LogFiles entity.
   */
  static _keys = ['Name', 'Application'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Application.
   */
  declare application: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Modified.
   * @nullable
   */
  declare lastModified?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Content Type.
   * @nullable
   */
  declare contentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Log File Type.
   * @nullable
   */
  declare logFileType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Node Scope.
   * @nullable
   */
  declare nodeScope?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Size.
   * @nullable
   */
  declare size?: DeserializedType<T, 'Edm.Int64'> | null;

  constructor(_entityApi: LogFilesApi<T>) {
    super(_entityApi);
  }
}

export interface LogFilesType<T extends DeSerializers = DefaultDeSerializers> {
  name: DeserializedType<T, 'Edm.String'>;
  application: DeserializedType<T, 'Edm.String'>;
  lastModified?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  contentType?: DeserializedType<T, 'Edm.String'> | null;
  logFileType?: DeserializedType<T, 'Edm.String'> | null;
  nodeScope?: DeserializedType<T, 'Edm.String'> | null;
  size?: DeserializedType<T, 'Edm.Int64'> | null;
}
