/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ArtifactReferences } from './ArtifactReferences';
import { ArtifactReferencesRequestBuilder } from './ArtifactReferencesRequestBuilder';
import { AccessPoliciesApi } from './AccessPoliciesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class ArtifactReferencesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ArtifactReferences<DeSerializersT>, DeSerializersT>
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
  ): ArtifactReferencesApi<DeSerializersT> {
    return new ArtifactReferencesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link accessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCESS_POLICY: OneToOneLink<
      ArtifactReferences<DeSerializersT>,
      DeSerializersT,
      AccessPoliciesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [AccessPoliciesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      ACCESS_POLICY: new OneToOneLink('AccessPolicy', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ArtifactReferences;

  requestBuilder(): ArtifactReferencesRequestBuilder<DeSerializersT> {
    return new ArtifactReferencesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ArtifactReferences<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ArtifactReferences<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ArtifactReferences<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ArtifactReferences,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ArtifactReferences,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_ATTRIBUTE: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_VALUE: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CONDITION_TYPE: OrderableEdmTypeField<
      ArtifactReferences<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link accessPolicy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ACCESS_POLICY: OneToOneLink<
      ArtifactReferences<DeSerializersT>,
      DeSerializersT,
      AccessPoliciesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ArtifactReferences<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEdmTypeField('Type', 'Edm.String', true),
        /**
         * Static representation of the {@link conditionAttribute} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_ATTRIBUTE: fieldBuilder.buildEdmTypeField(
          'ConditionAttribute',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_VALUE: fieldBuilder.buildEdmTypeField(
          'ConditionValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link conditionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONDITION_TYPE: fieldBuilder.buildEdmTypeField(
          'ConditionType',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ArtifactReferences)
      };
    }

    return this._schema;
  }
}
