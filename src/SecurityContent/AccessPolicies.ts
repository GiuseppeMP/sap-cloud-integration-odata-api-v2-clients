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
import type { AccessPoliciesApi } from './AccessPoliciesApi';
import {
  ArtifactReferences,
  ArtifactReferencesType
} from './ArtifactReferences';

/**
 * This class represents the entity "AccessPolicies" of service "com.sap.hci.api".
 */
export class AccessPolicies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AccessPoliciesType<T>
{
  /**
   * Technical entity name for AccessPolicies.
   */
  static override _entityName = 'AccessPolicies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccessPolicies entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Role Name.
   * @nullable
   */
  declare roleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ArtifactReferences} entity.
   */
  declare artifactReferences: ArtifactReferences<T>[];

  constructor(_entityApi: AccessPoliciesApi<T>) {
    super(_entityApi);
  }
}

export interface AccessPoliciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.Int64'>;
  roleName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  artifactReferences: ArtifactReferencesType<T>[];
}
