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
import type { BuildAndDeployStatusApi } from './BuildAndDeployStatusApi';

/**
 * This class represents the entity "BuildAndDeployStatus" of service "com.sap.hci.api".
 */
export class BuildAndDeployStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BuildAndDeployStatusType<T>
{
  /**
   * Technical entity name for BuildAndDeployStatus.
   */
  static override _entityName = 'BuildAndDeployStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BuildAndDeployStatus entity.
   */
  static _keys = ['TaskId'];
  /**
   * Task Id.
   */
  declare taskId: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: BuildAndDeployStatusApi<T>) {
    super(_entityApi);
  }
}

export interface BuildAndDeployStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  taskId: DeserializedType<T, 'Edm.String'>;
  status?: DeserializedType<T, 'Edm.String'> | null;
}
