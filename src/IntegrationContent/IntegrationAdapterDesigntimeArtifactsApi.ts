/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationAdapterDesigntimeArtifacts } from './IntegrationAdapterDesigntimeArtifacts';
import { IntegrationAdapterDesigntimeArtifactsRequestBuilder } from './IntegrationAdapterDesigntimeArtifactsRequestBuilder';
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
  EdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class IntegrationAdapterDesigntimeArtifactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
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
  ): IntegrationAdapterDesigntimeArtifactsApi<DeSerializersT> {
    return new IntegrationAdapterDesigntimeArtifactsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = IntegrationAdapterDesigntimeArtifacts;

  requestBuilder(): IntegrationAdapterDesigntimeArtifactsRequestBuilder<DeSerializersT> {
    return new IntegrationAdapterDesigntimeArtifactsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
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
    typeof IntegrationAdapterDesigntimeArtifacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntegrationAdapterDesigntimeArtifacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      IntegrationAdapterDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: OrderableEdmTypeField<
      IntegrationAdapterDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      IntegrationAdapterDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      IntegrationAdapterDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTIFACT_CONTENT: EdmTypeField<
      IntegrationAdapterDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ALL_FIELDS: AllFields<IntegrationAdapterDesigntimeArtifacts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link artifactContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTIFACT_CONTENT: fieldBuilder.buildEdmTypeField(
          'ArtifactContent',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntegrationAdapterDesigntimeArtifacts)
      };
    }

    return this._schema;
  }
}
