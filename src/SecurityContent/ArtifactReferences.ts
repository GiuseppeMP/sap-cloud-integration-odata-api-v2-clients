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
import type { ArtifactReferencesApi } from './ArtifactReferencesApi';
import { AccessPolicies, AccessPoliciesType } from './AccessPolicies';

/**
 * This class represents the entity "ArtifactReferences" of service "com.sap.hci.api".
 */
export class ArtifactReferences<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ArtifactReferencesType<T>
{
  /**
   * Technical entity name for ArtifactReferences.
   */
  static override _entityName = 'ArtifactReferences';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ArtifactReferences entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int64'>;
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
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Attribute.
   * @nullable
   */
  declare conditionAttribute?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Value.
   * @nullable
   */
  declare conditionValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Condition Type.
   * @nullable
   */
  declare conditionType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link AccessPolicies} entity.
   */
  declare accessPolicy?: AccessPolicies<T> | null;

  constructor(_entityApi: ArtifactReferencesApi<T>) {
    super(_entityApi);
  }
}

export interface ArtifactReferencesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int64'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: DeserializedType<T, 'Edm.String'> | null;
  conditionAttribute?: DeserializedType<T, 'Edm.String'> | null;
  conditionValue?: DeserializedType<T, 'Edm.String'> | null;
  conditionType?: DeserializedType<T, 'Edm.String'> | null;
  accessPolicy?: AccessPoliciesType<T> | null;
}
