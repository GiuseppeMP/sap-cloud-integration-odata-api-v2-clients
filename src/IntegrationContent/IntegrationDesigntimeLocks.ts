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
import type { IntegrationDesigntimeLocksApi } from './IntegrationDesigntimeLocksApi';

/**
 * This class represents the entity "IntegrationDesigntimeLocks" of service "com.sap.hci.api".
 */
export class IntegrationDesigntimeLocks<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntegrationDesigntimeLocksType<T>
{
  /**
   * Technical entity name for IntegrationDesigntimeLocks.
   */
  static override _entityName = 'IntegrationDesigntimeLocks';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationDesigntimeLocks entity.
   */
  static _keys = ['ResourceId'];
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Artifact Id.
   */
  declare artifactId: DeserializedType<T, 'Edm.String'>;
  /**
   * Artifact Name.
   * @nullable
   */
  declare artifactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Artifact Type.
   * @nullable
   */
  declare artifactType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package Id.
   * @nullable
   */
  declare packageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Package Name.
   * @nullable
   */
  declare packageName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created At.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created By.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IntegrationDesigntimeLocksApi<T>) {
    super(_entityApi);
  }
}

export interface IntegrationDesigntimeLocksType<
  T extends DeSerializers = DefaultDeSerializers
> {
  resourceId: DeserializedType<T, 'Edm.String'>;
  artifactId: DeserializedType<T, 'Edm.String'>;
  artifactName?: DeserializedType<T, 'Edm.String'> | null;
  artifactType?: DeserializedType<T, 'Edm.String'> | null;
  packageId?: DeserializedType<T, 'Edm.String'> | null;
  packageName?: DeserializedType<T, 'Edm.String'> | null;
  createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
}
