/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserCredentials } from './UserCredentials';
import { UserCredentialsRequestBuilder } from './UserCredentialsRequestBuilder';
import {
  SecurityArtifactDescriptor,
  SecurityArtifactDescriptorField
} from './SecurityArtifactDescriptor';
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
export class UserCredentialsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<UserCredentials<DeSerializersT>, DeSerializersT>
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
  ): UserCredentialsApi<DeSerializersT> {
    return new UserCredentialsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = UserCredentials;

  requestBuilder(): UserCredentialsRequestBuilder<DeSerializersT> {
    return new UserCredentialsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    UserCredentials<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<UserCredentials<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<UserCredentials<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof UserCredentials, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        UserCredentials,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    KIND: OrderableEdmTypeField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER: OrderableEdmTypeField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PASSWORD: OrderableEdmTypeField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_ID: OrderableEdmTypeField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_ARTIFACT_DESCRIPTOR: SecurityArtifactDescriptorField<
      UserCredentials<DeSerializers>,
      DeSerializersT,
      false,
      true
    >;
    ALL_FIELDS: AllFields<UserCredentials<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link kind} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        KIND: fieldBuilder.buildEdmTypeField('Kind', 'Edm.String', true),
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
         * Static representation of the {@link user} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER: fieldBuilder.buildEdmTypeField('User', 'Edm.String', true),
        /**
         * Static representation of the {@link password} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASSWORD: fieldBuilder.buildEdmTypeField(
          'Password',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link companyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_ID: fieldBuilder.buildEdmTypeField(
          'CompanyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityArtifactDescriptor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ARTIFACT_DESCRIPTOR: fieldBuilder.buildComplexTypeField(
          'SecurityArtifactDescriptor',
          SecurityArtifactDescriptorField,
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', UserCredentials)
      };
    }

    return this._schema;
  }
}
