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
import type { IntegrationDesigntimeArtifactsApi } from './IntegrationDesigntimeArtifactsApi';
import { Configurations, ConfigurationsType } from './Configurations';
import { Resources, ResourcesType } from './Resources';

/**
 * This class represents the entity "IntegrationDesigntimeArtifacts" of service "com.sap.hci.api".
 */
export class IntegrationDesigntimeArtifacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements IntegrationDesigntimeArtifactsType<T>
{
  /**
   * Technical entity name for IntegrationDesigntimeArtifacts.
   */
  static override _entityName = 'IntegrationDesigntimeArtifacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationDesigntimeArtifacts entity.
   */
  static _keys = ['Id', 'Version'];
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Artifact Content.
   * @nullable
   */
  declare artifactContent?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * One-to-many navigation property to the {@link Configurations} entity.
   */
  declare configurations: Configurations<T>[];
  /**
   * One-to-many navigation property to the {@link Resources} entity.
   */
  declare resources: Resources<T>[];

  constructor(_entityApi: IntegrationDesigntimeArtifactsApi<T>) {
    super(_entityApi);
  }
}

export interface IntegrationDesigntimeArtifactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  version: DeserializedType<T, 'Edm.String'>;
  packageId?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  artifactContent?: DeserializedType<T, 'Edm.Binary'> | null;
  configurations: ConfigurationsType<T>[];
  resources: ResourcesType<T>[];
}
