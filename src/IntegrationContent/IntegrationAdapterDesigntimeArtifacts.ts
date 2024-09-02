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
import type { IntegrationAdapterDesigntimeArtifactsApi } from './IntegrationAdapterDesigntimeArtifactsApi';

/**
 * This class represents the entity "IntegrationAdapterDesigntimeArtifacts" of service "com.sap.hci.api".
 */
export class IntegrationAdapterDesigntimeArtifacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntegrationAdapterDesigntimeArtifactsType<T>
{
  /**
   * Technical entity name for IntegrationAdapterDesigntimeArtifacts.
   */
  static override _entityName = 'IntegrationAdapterDesigntimeArtifacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationAdapterDesigntimeArtifacts entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Version.
   */
  declare version: DeserializedType<T, 'Edm.String'>;
  /**
   * Package Id.
   * @nullable
   */
  declare packageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Artifact Content.
   * @nullable
   */
  declare artifactContent?: DeserializedType<T, 'Edm.Binary'> | null;

  constructor(_entityApi: IntegrationAdapterDesigntimeArtifactsApi<T>) {
    super(_entityApi);
  }
}

export interface IntegrationAdapterDesigntimeArtifactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  version: DeserializedType<T, 'Edm.String'>;
  packageId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  artifactContent?: DeserializedType<T, 'Edm.Binary'> | null;
}
