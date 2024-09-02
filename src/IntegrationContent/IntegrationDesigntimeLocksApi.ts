/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationDesigntimeLocks } from './IntegrationDesigntimeLocks';
import { IntegrationDesigntimeLocksRequestBuilder } from './IntegrationDesigntimeLocksRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class IntegrationDesigntimeLocksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntegrationDesigntimeLocks<DeSerializersT>, DeSerializersT>
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
  ): IntegrationDesigntimeLocksApi<DeSerializersT> {
    return new IntegrationDesigntimeLocksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntegrationDesigntimeLocks;

  requestBuilder(): IntegrationDesigntimeLocksRequestBuilder<DeSerializersT> {
    return new IntegrationDesigntimeLocksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    IntegrationDesigntimeLocks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntegrationDesigntimeLocks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntegrationDesigntimeLocks<DeSerializersT>,
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
    typeof IntegrationDesigntimeLocks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntegrationDesigntimeLocks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESOURCE_ID: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARTIFACT_ID: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ARTIFACT_NAME: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTIFACT_TYPE: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKAGE_NAME: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      IntegrationDesigntimeLocks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntegrationDesigntimeLocks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link artifactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTIFACT_ID: fieldBuilder.buildEdmTypeField(
          'ArtifactId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link artifactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTIFACT_NAME: fieldBuilder.buildEdmTypeField(
          'ArtifactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link artifactType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTIFACT_TYPE: fieldBuilder.buildEdmTypeField(
          'ArtifactType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'PackageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packageName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_NAME: fieldBuilder.buildEdmTypeField(
          'PackageName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link createdAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_AT: fieldBuilder.buildEdmTypeField(
          'CreatedAt',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'CreatedBy',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntegrationDesigntimeLocks)
      };
    }

    return this._schema;
  }
}
