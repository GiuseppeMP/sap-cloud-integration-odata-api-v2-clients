/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AccessPolicies } from './AccessPolicies';
import { AccessPoliciesRequestBuilder } from './AccessPoliciesRequestBuilder';
import { ArtifactReferencesApi } from './ArtifactReferencesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class AccessPoliciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AccessPolicies<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): AccessPoliciesApi<DeSerializersT> {
    return new AccessPoliciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link artifactReferences} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ARTIFACT_REFERENCES: Link<
      AccessPolicies<DeSerializersT>,
      DeSerializersT,
      ArtifactReferencesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ArtifactReferencesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ARTIFACT_REFERENCES: new Link('ArtifactReferences', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = AccessPolicies;

  requestBuilder(): AccessPoliciesRequestBuilder<DeSerializersT> {
    return new AccessPoliciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AccessPolicies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AccessPolicies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AccessPolicies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof AccessPolicies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(AccessPolicies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      AccessPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ROLE_NAME: OrderableEdmTypeField<
      AccessPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      AccessPolicies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link artifactReferences} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ARTIFACT_REFERENCES: Link<
      AccessPolicies<DeSerializersT>,
      DeSerializersT,
      ArtifactReferencesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<AccessPolicies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Int64', false),
        /**
         * Static representation of the {@link roleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE_NAME: fieldBuilder.buildEdmTypeField(
          'RoleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AccessPolicies)
      };
    }

    return this._schema;
  }
}
